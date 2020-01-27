class Todo {
  constructor() {
    this.todos = [
      {
        name: '자바스크립트 공부하기',
        tags: ['programming', 'javascript'],
        status: 'todo',
        id: 12123123,
      },
      {
        name: '그림 그리기',
        tags: ['picture', 'favorite'],
        status: 'doing',
        id: 312323,
      },
      {
        name: 'iOS 공부하기',
        tags: ['programming', 'javascript'],
        status: 'done',
        id: 212132,
      },
    ];
  }

  show(command) {
    const todo = this.todos;
    switch (command) {
      case 'all':
        console.log(this.showAll(todo));
        break;
      case 'todos':
        console.log(this.showTodos(todo));
        break;
      default:
        throw new Error(`${command} is not available command.`);
        break;
    }
  }

  showAll(obj) {
    let str = '';
    const statusMap = this.sortStatus(obj);
    str = `현재 상태: `;
    statusMap.forEach((value, key) => {
      str += `${key}:${value}개, `;
    });
    return str;
  }

  showTodos(obj) {
    let str = '';
    const nameArr = this.sortName(obj);
    str = `todo 리스트: 총 ${nameArr.length}건: `;
    nameArr.forEach(name => (str += `'${name}', `));
    return str;
  }

  sortStatus(obj) {
    const status = new Map();
    for (let key in obj) {
      const keyStatus = obj[key].status;
      status.has(keyStatus)
        ? status.set(keyStatus, status.get(keyStatus)++)
        : status.set(keyStatus, 1);
    }
    return status;
  }

  sortName(obj) {
    const name = [];
    for (let key in obj) {
      const keyName = obj[key].name;
      name.push(keyName);
    }
    return name;
  }
}

const todo = new Todo();
todo.show('all');
todo.show('todos');
todo.show('blahblah');
