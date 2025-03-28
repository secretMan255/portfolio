import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Separator } from './ui/separator'

type SkillSet = {
     skill: string
     proficient: string
}

export default function SkillSetTable() {
     const skillSet: SkillSet[] = [
          { skill: 'Javascript / Typescript', proficient: '8 / 10' },
          {
               skill: 'NodeJs',
               proficient: '8 / 10',
          },
          { skill: 'React / Vue', proficient: '7 / 10' },
          { skill: 'C#', proficient: '7 / 10' },
          { skill: 'Mysql', proficient: '8 / 10' },
          { skill: 'API / Backend System Design', proficient: '8 / 10' },
          { skill: 'Docker', proficient: '7 / 10' },
     ]

     return (
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
     )
}
