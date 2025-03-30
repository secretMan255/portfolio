import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Cable, PanelBottom, Bot, Gamepad2, FileBox } from 'lucide-react'

type GitHub = {
     title: string
     icon: any
     describe: string
     link: string
}

export default function Github() {
     const github: GitHub[] = [
          {
               title: 'Rest-API-and-Mysql-Service',
               icon: <Cable className="h-8 w-8 text-primary" />,
               describe: 'A api service build with nodejs and mysql',
               link: 'https://github.com/secretMan255/Rest-API-and-Mysql-Service',
          },
          {
               title: 'Hardware Landing Page',
               icon: <PanelBottom className="h-8 w-8 text-primary" />,
               describe: 'A landing page of hardware product build with vue3 and vuetify',
               link: 'https://github.com/secretMan255/Hardware-portal',
          },
          {
               title: 'Admin Portal',
               icon: <PanelBottom className="h-8 w-8 text-primary" />,
               describe: 'A admin portal build with nextjs and shadcn',
               link: 'https://github.com/secretMan255/hardware-admin-portal',
          },
          {
               title: 'Python API and Mysql-Service',
               icon: <Cable className="h-8 w-8 text-primary" />,
               describe: 'A api service build with python and mysql',
               link: 'https://github.com/secretMan255/python-api-service',
          },
          {
               title: 'A Trading Bot',
               icon: <Bot className="h-8 w-8 text-primary" />,
               describe: 'A trading bot build with nodejs',
               link: 'https://github.com/secretMan255/Trading-bot',
          },
          {
               title: 'Banker Player Game',
               icon: <Gamepad2 className="h-8 w-8 text-primary" />,
               describe: 'A banker player game build with nextjs and shadcn',
               link: 'https://github.com/secretMan255/banker_player',
          },
          {
               title: 'Personal Portfolio',
               icon: <FileBox className="h-8 w-8 text-primary" />,
               describe: 'A portfolio build with nextks and shadcn',
               link: 'https://github.com/secretMan255/banker_player',
          },
     ]

     function directToGithub(link: string) {
          window.open(link, '_blank', 'noopener,noreferrer')
     }

     return (
          <section>
               <Separator className="my-4" />
               <div className="pb-10 flex flex-col items-center w-full">
                    <h5 className="text-2xl sm:font-bold font-bold leading-none">Project Build</h5>
               </div>
               <div className="flex justify-center w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl max-w-7xl mx-auto px-4 mb-10">
                         {github.map((data, index) => (
                              <div key={index} className="flex flex-col p-6 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                                   <div className="flex items-center gap-4 mb-4">
                                        {data.icon}
                                        <div>
                                             <h3 className="font-semibold text-md">{data.title}</h3>
                                             <p className="text-sm text-muted-foreground">{data.describe}</p>
                                        </div>
                                   </div>
                                   <div className="mt-auto">
                                        <Button className="w-full" onClick={() => directToGithub(data.link)}>
                                             View Project
                                        </Button>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     )
}
