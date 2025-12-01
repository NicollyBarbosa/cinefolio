import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, Instagram, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/nicollymariosoliveira@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setErrorMessage('Ocorreu um erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      setErrorMessage('Erro de conexão. Verifique sua internet.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-[#050505] border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Info Side */}
          <div className="lg:w-5/12">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-cinzel text-white mb-6">
                Vamos Criar <br /><span className="text-zinc-600">Juntos</span>
              </h2>
              <p className="text-gray-400 mb-12 font-light text-lg">
                Tem um projeto em mente ou precisa de uma gestão estratégica para suas redes sociais?
                Estou disponível para colaborações e novos desafios.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm text-red-600 group-hover:text-white group-hover:bg-red-600 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-widest mb-1">Email</h4>
                    <a href="mailto:nicollymariosoliveira@gmail.com" className="text-gray-400 font-light hover:text-white transition-colors">
                      nicollymariosoliveira@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm text-red-600 group-hover:text-white group-hover:bg-red-600 transition-colors duration-300">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-widest mb-1">Instagram</h4>
                    <a href="https://www.instagram.com/nicollymarios/" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-light hover:text-white transition-colors">
                      @nicollymarios
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12">
            <FadeIn delay={200}>
              <div className="bg-zinc-900/30 p-8 md:p-12 border border-white/5 backdrop-blur-sm relative">

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-cinzel text-white mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-400">Obrigada pelo contato. Responderei em breve.</p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-sm text-red-500 hover:text-red-400 uppercase tracking-widest font-bold"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="_subject" value="Novo contato via CineFolio" />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Nome</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Interesse</label>
                      <select name="interest" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-red-600 transition-colors">
                        <option value="Gestão de Redes Sociais">Gestão de Redes Sociais</option>
                        <option value="Edição de Vídeo">Edição de Vídeo</option>
                        <option value="Produção Audiovisual">Produção Audiovisual</option>
                        <option value="Parceria / Colaboração">Parceria / Colaboração</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Mensagem</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                        placeholder="Conte mais sobre o seu projeto..."
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded border border-red-500/20">
                        <AlertCircle className="w-4 h-4" />
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Enviar Mensagem'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};