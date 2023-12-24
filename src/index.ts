interface ITodo {
    id: number;
    title: string
}

class NoteBook {
    private _todos: ITodo[]

    constructor(private name: string) {
        this._initMain()
    }

    private _getTodosFromLS(): void {
        this._todos = JSON.parse(localStorage.getItem(this.name)) || []
    }

    private _setTodosToLS(): void {
        localStorage.setItem(this.name, JSON.stringify(this._todos))
        this._initTodos()
    }

    private _initMain(): void {

        this._initForm()
        this._initTodos()
        this._delTodo()
    }

    private _initTodos(): void {
        this._getTodosFromLS()
        const todosDiv = document.querySelector('#todos') as HTMLDivElement;
        todosDiv.innerHTML = '';
        todosDiv.style.display = 'flex';
        todosDiv.style.flexDirection = 'column';
        todosDiv.style.rowGap = '10px';
        this._todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.innerText = `${todo.id}) ${todo.title}`;
            const todoBtn__Del = document.createElement('button');
            todoBtn__Del.setAttribute('class', "btn-del")
            todoBtn__Del.setAttribute('id', "btn-del_" + todo.id);
            todoBtn__Del.style.marginLeft = '10px';
            todoBtn__Del.innerText = 'del';
            todoDiv.appendChild(todoBtn__Del);
            todosDiv.appendChild(todoDiv);

        })
    }

    private _initForm(): void {
        const form = document.forms['form'] as HTMLFormElement;
        form.onsubmit = (e) => {
            e.preventDefault()
            const input = e.target['title'] as HTMLInputElement;
            const id = this._todos.slice(-1)[0]?.id + 1 || 1;
            this._todos.push({id, title: input.value})
            this._setTodosToLS()
            form.reset()
        }
    }
    private _delTodo(): void {
        const todosDiv = document.querySelector('#todos') as HTMLDivElement;
        let _this:object = this;
        todosDiv.addEventListener("click", function (event) {
            if (event.target.tagName.toLowerCase() == 'button') {
                 let idToRemove: number = Number(event.target.id.split('_')[1]);
                if (idToRemove) {
                    let indexToRemove = _this._todos.findIndex(function (item) {
                        return item.id === idToRemove;
                    });
                   if (indexToRemove !== -1) {
                       _this._todos.splice(indexToRemove, 1);
                       _this._setTodosToLS();
                   }
               }
            }
        });
    }
}

let notebook: object;
notebook = new NoteBook('notebook3');


