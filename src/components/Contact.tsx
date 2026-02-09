import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'London Eye, London, UK',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+923165511771',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Mail,
      title: 'E-Mail',
      content: 'info@mevan.ai',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Youtube, label: 'YouTube' },
    { icon: Instagram, label: 'Instagram' },
  ];

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Drop us a line with any questions, inquiries or business proposals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We're here to help you transform your business with AI-driven solutions. Whether you need chatbot setup, virtual assistant support, or GHL automation, our team is ready to assist you. Get in touch today and let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-3xl p-4 backdrop-blur-sm">
                  {/* GHL Inline Form */}
                  <iframe
                    src="https://link.mevan.ai/widget/form/NbHGv0ldFCF6A9hLcCJG"
                    style={{
                      width: '100%',
                      height: '504px',
                      border: 'none',
                      borderRadius: '12px',
                    }}
                    id="inline-NbHGv0ldFCF6A9hLcCJG"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Contact Us Form"
                    data-height="504"
                    data-layout-iframe-id="inline-NbHGv0ldFCF6A9hLcCJG"
                    data-form-id="NbHGv0ldFCF6A9hLcCJG"
                    title="Contact Us Form"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}></div>
                  <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${info.gradient} rounded-xl flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                        <p className="text-gray-400">{info.content}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all"
                      >
                        <social.icon className="w-5 h-5 text-white" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
