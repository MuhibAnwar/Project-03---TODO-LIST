
import inquirer from 'inquirer';

let todo: string[] = [];
let condition = true;

while (condition) {
    // Prompt the user for the to-do item and whether they want to add more items
    const input = await inquirer.prompt([
        {
            name: 'TODOLIST',
            type: 'input',
            message: 'What do you want to do?',
        },
        {
            name: 'ADDMORE',
            type: 'list',
            choices: ['true', 'false'],
            message: 'Do you want to add more?',
        },
    ]);

    // Add the new to-do item to the list
    todo.push(input.TODOLIST);

    // Update the condition based on the user's input
    condition = input.ADDMORE === 'true';
}

// Print the final to-do list
console.log(todo);
