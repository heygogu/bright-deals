import { motion } from "framer-motion";
import { Check, Star, Sparkles, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BenefitsTestimonialsCTA({
  benefits,
  testimonials,
}: any) {
  return (
    <>
      {/* Benefits Section - Heroic Showcase */}
      <section id='benefits' className='relative  px-6 py-40  overflow-hidden'>
        {/* <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-indigo-200/20 rounded-full blur-xl'></div> */}
        <div className='max-w-5xl mx-auto relative'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'>
            <span className='text-indigo-600 font-semibold text-sm uppercase tracking-wider'>
              Benefits
            </span>
            <h2 className='text-5xl pb-2 md:text-6xl font-extrabold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600'>
              Why Creators Choose Us
            </h2>
            <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
              We’re not just another tool. We’re the growth engine behind
              today’s top creators.
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-3 gap-10 px-5 lg:px-0'>
            {benefits.map((benefit: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className='relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-slate-200 hover:shadow-2xl transition'>
                <div className='absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center text-white shadow-md'>
                  <Check className='w-6 h-6' />
                </div>
                <p className='text-lg font-semibold text-slate-800'>
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>

          <div className='mt-20 grid md:grid-cols-3 gap-6 px-5 lg:px-0 text-center'>
            {[
              { value: "40%", label: "Higher CTR" },
              { value: "10h", label: "Saved Weekly" },
              { value: "3x", label: "Revenue Growth" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className='p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl'>
                <div className='text-5xl font-extrabold mb-2'>{stat.value}</div>
                <div className='text-indigo-100'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Immersive Carousel Style */}
      <section
        id='testimonials'
        className='relative z-10 px-6 py-40 bg-slate-900 text-white overflow-hidden'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 0.1px 0.1px, var(--color-white) 0.1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}></div>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.2),transparent)]'></div>
        <div className='max-w-6xl mx-auto relative'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'>
            <span className='text-indigo-400 font-semibold text-sm uppercase tracking-wider'>
              Testimonials
            </span>
            <h2 className='text-5xl md:text-6xl font-extrabold mt-4 mb-6'>
              Trusted by the Best
            </h2>
            <p className='text-xl text-slate-300 max-w-2xl mx-auto'>
              Hear directly from creators who scaled their impact with
              BrightDeals.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-10'>
            {testimonials.map((testimonial: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className='relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-xl'>
                <Quote className='w-10 h-10 text-indigo-400 mb-6' />
                <p className='text-slate-200 mb-6'>{testimonial.text}</p>
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-lg font-bold shadow-md'>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className='font-semibold text-white'>
                      {testimonial.name}
                    </div>
                    <div className='text-sm text-slate-400'>
                      {testimonial.role}
                    </div>
                    <div className='text-xs text-indigo-400'>
                      {testimonial.followers} followers
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Big Closing Hero */}
      <section className='relative z-10 px-6 py-40 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white overflow-hidden'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 0.1px 0.1px, var(--color-white) 0.3px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className='max-w-5xl mx-auto text-center relative'>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className='absolute -top-20 -left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-30'
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className='absolute -bottom-20 -right-20 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30'
          />

          <h2 className='text-6xl font-extrabold mb-8 relative z-10'>
            Ready to Create Your Success Story?
          </h2>
          <p className='text-xl text-indigo-100 mb-12 max-w-2xl mx-auto relative z-10'>
            Thousands of creators trust BrightDeals to grow their reach and
            revenue. Start today with no risk.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10'>
            <Button
              size='lg'
              className='bg-white text-indigo-600 font-bold text-lg px-12 py-6 rounded-2xl shadow-2xl hover:bg-slate-100'>
              Start Free Trial <Sparkles className='ml-2 w-5 h-5' />
            </Button>
            <Button
              size='lg'
              // variant='outline'
              className='border-2 border-white/40 bg-white/20  hover:bg-white/10 text-lg px-12 py-6 rounded-2xl'>
              Schedule Demo
            </Button>
          </div>

          <div className='mt-10 flex flex-wrap justify-center gap-6 text-sm text-indigo-100 relative z-10'>
            <div className='flex items-center gap-2'>
              <Check className='w-4 h-4 text-emerald-300' /> 14-day free trial
            </div>
            <div className='flex items-center gap-2'>
              <Check className='w-4 h-4 text-emerald-300' /> No credit card
              required
            </div>
            <div className='flex items-center gap-2'>
              <Check className='w-4 h-4 text-emerald-300' /> Cancel anytime
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
