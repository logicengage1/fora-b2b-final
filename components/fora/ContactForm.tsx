'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, FileText, CheckCircle, AlertCircle, Send, Loader2 } from 'lucide-react';

interface FormData {
  full_name: string;
  company_name: string;
  email: string;
  project_description: string;
}

interface FormErrors {
  full_name?: string;
  company_name?: string;
  email?: string;
  project_description?: string;
}

const MAX_FILES = 5;
const MAX_FILE_MB = 10;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    company_name: '',
    email: '',
    project_description: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Ime i prezime su obavezni.';
    if (!formData.company_name.trim()) newErrors.company_name = 'Naziv firme je obavezan.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email je obavezan.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Unesite ispravnu email adresu.';
    }
    if (!formData.project_description.trim()) {
      newErrors.project_description = 'Opis projekta je obavezan.';
    } else if (formData.project_description.trim().length < 20) {
      newErrors.project_description = 'Opišite projekat u bar 20 karaktera.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const allowed = Array.from(newFiles).filter(
      (f) => f.size <= MAX_FILE_MB * 1024 * 1024
    );
    setFiles((prev) => {
      const combined = [...prev, ...allowed];
      return combined.slice(0, MAX_FILES);
    });
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          file_names: files.map((f) => f.name),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Greška pri slanju.');
      }

      setSubmitStatus('success');
      setFormData({ full_name: '', company_name: '', email: '', project_description: '' });
      setFiles([]);
    } catch (err: any) {
      setSubmitStatus('error');
      setSubmitError(err.message || 'Greška pri slanju. Pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-fora-red/20 focus:border-fora-red ${errors[field] ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 hover:border-slate-300'
    }`;

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-slate-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-12"
          >
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Upit je uspješno poslan!</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Hvala na povjerenju. Naš tim će pregledati vašu tehničku specifikaciju i kontaktirati vas s ponudom u roku od 48 sati.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="bg-fora-red hover:bg-[#d52b28] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Pošaljite novi upit
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-fora-red text-sm font-semibold tracking-widest uppercase mb-4">
              Zatražite ponudu
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Pošaljite nam tehničku specifikaciju
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
              Priložite vaše tehničke fajlove i opišite projekat. Odgovorićemo s detaljnom i transparentnom ponudom u roku 48 sati.
            </p>

            {/* Info boxes */}
            <div className="space-y-4">
              {[
                { label: 'Email', value: 'plexiglas@forasrbac.com', sub: 'Za tehničke upite' },
                { label: 'Telefon', value: '+387 51 740 909 / +387 63 995 343', sub: 'Radnim danima 08–16h' },
                { label: 'Adresa', value: 'Zdravka Čelara 5, Srbac', sub: 'Bosna i Hercegovina' },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/8 rounded-xl px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-xs font-medium mb-0.5">{item.label}</p>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  </div>
                  <span className="text-slate-500 text-xs">{item.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} noValidate className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wide">
                    Ime i prezime <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Marko Marković"
                    className={inputClass('full_name')}
                  />
                  {errors.full_name && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.full_name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wide">
                    Naziv firme <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="ABC d.o.o."
                    className={inputClass('company_name')}
                  />
                  {errors.company_name && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.company_name}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Email adresa <span className="text-red-400">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="marko@firma.ba"
                  className={inputClass('email')}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Opis projekta <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="project_description"
                  value={formData.project_description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Opišite vaš projekat — dimenzije, materijal, količine, rok isporuke..."
                  className={`${inputClass('project_description')} resize-none`}
                />
                {errors.project_description && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.project_description}
                  </p>
                )}
              </div>

              {/* File upload */}
              <div>
                <label className="block text-slate-300 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Tehnička dokumentacija <span className="text-slate-500 normal-case font-normal">(opciono)</span>
                </label>
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative border-2 border-dashed rounded-xl px-6 py-8 text-center cursor-pointer transition-all duration-200 ${isDragging
                    ? 'border-fora-red bg-fora-red/10'
                    : 'border-white/15 hover:border-white/30 hover:bg-white/3'
                    }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.dxf,.dwg,.ai,.png,.jpg,.jpeg"
                    className="hidden"
                    onChange={(e) => addFiles(e.target.files)}
                  />
                  <Upload className="w-7 h-7 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-300 text-sm font-medium">
                    Prevucite fajlove ovdje ili{' '}
                    <span className="text-fora-red underline">pretražite</span>
                  </p>
                  <p className="text-slate-500 text-xs mt-1">PDF, DXF, DWG, AI, PNG — max {MAX_FILE_MB}MB po fajlu</p>
                </div>

                {/* File list */}
                {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {files.map((file, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-lg px-3 py-2"
                      >
                        <FileText className="w-4 h-4 text-fora-red flex-shrink-0" />
                        <span className="text-slate-300 text-xs flex-grow truncate">{file.name}</span>
                        <span className="text-slate-500 text-xs flex-shrink-0">
                          {(file.size / 1024 / 1024).toFixed(1)} MB
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="text-slate-500 hover:text-red-400 transition-colors flex-shrink-0"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Error message */}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-sm">{submitError}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 bg-fora-red hover:bg-[#d52b28] disabled:bg-fora-red/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-xl shadow-fora-red/30 hover:shadow-fora-red/50 hover:-translate-y-0.5 disabled:translate-y-0 text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Slanje...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Zatražite tehničku ponudu
                  </>
                )}
              </button>

              <p className="text-slate-500 text-xs text-center">
                Vaši podaci su zaštićeni i koristimo ih isključivo za pripremu ponude.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
