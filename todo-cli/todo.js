const todoList = () => {
  const all = [];

  const add = (todoItem) => {
      all.push(todoItem);
  };

  const markAsComplete = (index) => {
      all[index].completed = true;
  };

  const date = new Date("2023-12-19");

  const overdue = () => {
      const yesterday = new Date(date);
      yesterday.setDate(date.getDate() - 1);
      yesterday.toISOString().split("T")[0];
      const over = [];

      for (let i = 0; i < all.length; i++) {
          const dueDate = new Date(all[i].dueDate);
          if (dueDate <= yesterday) {
              all[i].dueDate = yesterday.toISOString().split("T")[0];
              over.push(all[i]);
          }
      }

      return over;
  };

  const dueToday = () => {
      const today = new Date("2023-12-19");
     // console.log(today);

      const duet = [];

      for (let j = 0; j < all.length; j++) {
          const dueDate = new Date(all[j].dueDate);

          if ( dueDate.toDateString() === today.toDateString()) {
              all[j].dueDate = today.toISOString().split("T")[0];
              duet.push(all[j]);
          }
      }

      return duet;
  };

  const dueLater = () => {
      const tomorrow = new Date("2023-12-19");
      tomorrow.setDate(date.getDate() + 1);
     // console.log(tomorrow);

      const duel = [];

      for (let k = 0; k < all.length; k++) {
          const dueDate = new Date(all[k].dueDate);

          if ( dueDate >= tomorrow) {
              all[k].dueDate = tomorrow.toISOString().split("T")[0];
              duel.push(all[k]);
          }
      }

      return duel;
  };

  const toDisplayableList = (list) => {
      let output = "";
      for (let i = 0; i < list.length; i++) {
          if (!list[i].completed) {
            if (list[i].dueDate === today){
                output += `[ ] ${list[i].title}`;
            }else{
              output += `[ ] ${list[i].title} ${list[i].dueDate}\n`;
            }
         } else {
              output += `[x] ${list[i].title}\n`;
          }
      }
      return output;
  };

  return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
  };
};
const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");


