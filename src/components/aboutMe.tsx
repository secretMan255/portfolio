import { Button } from './ui/button'
import { Separator } from './ui/separator'

export default function AboutMe() {
     function downloadResume() {
          const link = document.createElement('a')
          link.href = '/Yap Yi Liang - Software Developer.pdf'
          link.download = 'Yap Yi Liang - Software Developer.pdf'
          link.click()
     }

     function direct(link: string) {
          window.open(link, '_blank', 'noopener,noreferrer')
     }

     return (
          <section>
               <div className="container mx-auto max-w-3xl">
                    <Separator className="my-4" />
                    <div className="p-6 md:p-8 rounded-lg flex flex-col gap-6 items-center justify-center">
                         <div className="text-center md:text-left">
                              <h4 className="text-2xl md:text-3xl font-bold leading-none ">About Me</h4>
                              <p className="pt-3 md:pt-5 text-1xl">
                                   Hi, my name is Yap Yi Liang, 24 years old. I am a Full-Stack Software Developer. I enjoy programming and developing software, and I love learning new technologies.
                                   Previously worked as Full-Stack Software Developer at Coherent Plus.
                              </p>
                         </div>
                    </div>
                    <div className="pb-6 md:pb-8 flex flex-row text-center justify-center">
                         <Button variant="link" onClick={() => direct('https://github.com/secretMan255')} className="cursor-pointer font-bold">
                              GITHUB
                         </Button>
                         <Button variant="link" onClick={() => direct('https://wa.me/+60172223195')} className="cursor-pointer font-bold">
                              WHATSAPP
                         </Button>
                    </div>
                    <div className="flex justify-center" onClick={downloadResume}>
                         <Button className="w-full w-75 md:w-2xl">DOWNLOAD RESUME</Button>
                    </div>
               </div>
          </section>
     )
}
