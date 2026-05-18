import {makeAutoObservable, runInAction} from "mobx";

interface IUser {
  id: number;
  name: string;
  email: string;
}

class TestMobxStore {
  // STATE (observable)
  users: IUser[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  constructor() {
    // Added reactive
    makeAutoObservable(this)

    // example some item
    // makeObservable(this, {
    //   // реактивное поле
    //   count: observable,
    //   // action
    //   increment: action,
    //   // computed
    //   doubleCount: computed
    // });
  }

  // action
  // increment() {
  //   this.count++;
  // }

  // computed (get)
  // get doubleCount() {
  //   return this.count * 2;
  // }

  // COMPUTED
  get emailsList() {
    return this.users.map(user => user.email)
  }

  // async ACTIONS
  fetchUsername = async ()=> {
    try {
      this.isLoading = true;

      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const result = await response.json();

      console.log('result', result);

      // runInAction - refresh ASYNC data
      runInAction(() => {
        this.users = result;
      })
    } catch (e) {
      runInAction(() => {
        this.error = 'error';
      })
    } finally {
      runInAction(() => {
        this.isLoading = false;
      })
    }
  }
}

export const testMobxStore = new TestMobxStore();