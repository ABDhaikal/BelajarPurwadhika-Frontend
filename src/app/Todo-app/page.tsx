"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";

const TodoApp = () => {
   return (
      <section>
         <div className="container m-auto">
            <Navbar />
            <AddTodo />
         </div>
      </section>
   );
};

export default TodoApp;

export const Navbar = () => {
   return (
      <section className="bg-green-500 h-[10vh] items-center justify-center">
         <div className="container m-auto max-w-5xl h-full flex items-center relative">
            <p>This is Navbar</p>
         </div>
      </section>
   );
};

// add todo

export const AddTodo = () => {
   interface Itodo {
      status: boolean;
      todo: string;
   }
   const [todo, setTodo] = useState<Itodo[]>([]);
   const [newtodo, setNewTodo] = useState<string>("");

   // change todo status
   const changeTodoStatus = (index: number) => {
      const newTodo = [...todo];
      newTodo[index].status = !newTodo[index].status;
      setTodo(newTodo);
   };

   return (
      <div className=" items-center m-auto w-3/4 pt-9">
         <div className="py-2">
            <Dialog>
               <DialogTrigger asChild>
                  <Button variant="outline">Edit Profile</Button>
               </DialogTrigger>

               <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                     <DialogTitle>Add Todo list</DialogTitle>
                     <DialogDescription>
                        Add Your todo in here
                     </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                           Name
                        </Label>
                        <Input
                           id="name"
                           value={newtodo}
                           onChange={(e) => setNewTodo(e.target.value)}
                           placeholder="add your todo"
                           className="col-span-3"
                        />
                     </div>
                  </div>

                  <DialogFooter>
                     <Button
                        type="submit"
                        onClick={() => {
                           setTodo([...todo, { status: false, todo: newtodo }]);
                        }}
                     >
                        Add
                     </Button>
                  </DialogFooter>
               </DialogContent>
            </Dialog>
         </div>

         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead>Done</TableHead>
                  <TableHead>Todo</TableHead>
                  <TableHead>Action</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {todo.map((item, key, self) => (
                  <TableRow key={key}>
                     <TableCell>
                        <Checkbox
                           checked={item.status}
                           onClick={() => changeTodoStatus(key)}
                        />
                     </TableCell>
                     <TableCell className={item.status ? "line-through" : ""}>
                        {item.todo}
                     </TableCell>
                     <TableCell>
                        <Button
                           onClick={() => {
                               setTodo(self.filter((todo) => todo !== item));
                            }}
                            color="red"
                           variant={"outline"}

                        >
                           delete
                        </Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   );
};
