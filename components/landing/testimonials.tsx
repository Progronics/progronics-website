import MainContainer from "../main-container"


export default function Testimonials() {

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Progronics' AI solutions transformed our operations. Results exceeded expectations.",
    },
    {
      name: "Michael Chen",
      role: "Product Lead, InnovateCorp",
      content: "Their machine learning expertise is world-class. Highly recommended for any AI project.",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, CloudSoft Solutions",
      content: "Best decision was partnering with Progronics for our AI infrastructure.",
    },
  ]

  return (
    <MainContainer id="testimonials" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-lg text-slate-300">Trusted by industry leaders</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-8 border border-slate-700/50 hover:shadow-lg "

            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full" />
                ))}
              </div>
              <p className="text-slate-100 mb-6 italic">{testimonial.content}</p>
              <div className="border-t border-slate-700/50 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-slate-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  )
}