'use client'

import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import SkillSetTable from '@/components/skillSetTable'
import Github from '@/components/github'
import AboutMe from '@/components/aboutMe'

export default function Home() {
     return (
          <div className="min-h-screen">
               {/* <header className="bg-white shadow"></header> */}

               <section className="py-8">
                    <div className="container mx-auto max-w-2xl">
                         <div className="p-6 md:p-8 rounded-lg flex flex-col md:flex-row gap-6 items-center justify-center">
                              <div>
                                   <Avatar className="md:h-52 md:w-52 h-40 w-40">
                                        <AvatarImage src="/me.jpg" alt=""></AvatarImage>
                                   </Avatar>
                              </div>
                              <div>
                                   <div className="space-y-3">
                                        <h4 className="text-2xl md:text-3xl font-bold leading-none ">Hi, I'm Yap Yi Liang</h4>
                                        <h5 className="text-1xl md:text-2xl font-bold leading-none text-dark-green">A Full-Stack Software Developer</h5>
                                   </div>
                                   <Separator className="my-4" />

                                   <ul className="flex flex-col space-y-1">
                                        <li className="font-bold">Malaysian</li>
                                        <li className="font-bold">Born in 28 Febuary 2001</li>
                                        <li className="font-bold">A guys who loves coding and crypto</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </section>

               <AboutMe></AboutMe>

               <SkillSetTable></SkillSetTable>

               <Github></Github>
          </div>
     )
}
