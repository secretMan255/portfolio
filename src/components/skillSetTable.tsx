import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Separator } from './ui/separator'
import { Code, Braces, NetworkIcon, Brackets, Database, Satellite, Box } from 'lucide-react'

type SkillSet = {
     skill: string
     proficient: string
     icon: any
}

export default function SkillSetTable() {
     const skillSet: SkillSet[] = [
          { skill: 'Javascript / Typescript', proficient: '8 / 10', icon: <Code className="text-primary"></Code> },
          {
               skill: 'NodeJs',
               proficient: '8 / 10',
               icon: <NetworkIcon className="text-primary" />,
          },
          {
               skill: 'NestJs',
               proficient: '8 / 10',
               icon: <NetworkIcon className="text-primary" />,
          },
          { skill: 'React / Vue', proficient: '7 / 10', icon: <Braces className="text-primary"></Braces> },
          { skill: 'C#', proficient: '7 / 10', icon: <Brackets className="text-primary" /> },
          { skill: 'Mysql', proficient: '8 / 10', icon: <Database className="text-primary" /> },
          { skill: 'API / Backend System Design', proficient: '8 / 10', icon: <Satellite className="text-primary" /> },
          { skill: 'Docker', proficient: '7 / 10', icon: <Box className="text-primary" /> },
     ]

     return (
          <section className="py-8">
               <Separator className="my-4" />
               <div className="pb-10 pt-10 flex flex-col items-center w-full">
                    <h5 className="text-2xl sm:font-bold font-bold leading-none">Skill Set</h5>
               </div>
               <div className="flex text-center justify-center w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mb-10">
                         {skillSet.map((data, index) => (
                              <div key={index} className="flex flex-col p-6 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                                   <div className="flex  justify-center items-center gap-4">
                                        {data.icon}
                                        <div>
                                             <h3 className="font-semibold text-sm">{data.skill}</h3>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
               {/* <div className="container mx-auto max-w-2xl">
                    <div className="pb-10 flex flex-col items-center w-full">
                         <Separator className="my-4" />
                         <h5 className="text-2xl sm:font-bold font-medium leading-none">Skill Set</h5>
                         <Table className="mx-auto w-[27.5rem] md:w-full">
                              <TableHeader>
                                   <TableRow>
                                        <TableHead className="font-bold">Language / Tool</TableHead>
                                        <TableHead className="text-center font-bold">Proficient</TableHead>
                                   </TableRow>
                              </TableHeader>
                              <TableBody>
                                   {skillSet.map((skill, index) => (
                                        <TableRow key={index}>
                                             <TableCell className="font-medium">{skill.skill}</TableCell>
                                             <TableCell className="font-medium text-center">{skill.proficient}</TableCell>
                                        </TableRow>
                                   ))}
                              </TableBody>
                         </Table>
                    </div>
               </div> */}
          </section>
     )
}
