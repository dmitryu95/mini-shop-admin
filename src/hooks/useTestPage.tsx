import { useState} from "react";
import {useQuery} from "@tanstack/react-query";

const useTestPage = () => {
  const [status, setStatus] = useState<boolean>(false);

  const getRandomUser = async () => {
    return await fetch('https://randomuser.me/api/')
  }

  const startHook = () => {
    console.log("startHook");
  }

  startHook();

  const startHookFn = (fn: Function) => {
    console.log("startHookFn");

    fn();
  }

  const EndHookFn = (word = 'test') => {
    console.log("EndHookFn with word:", word);
  }

  startHookFn(EndHookFn)
  startHookFn(() => EndHookFn('callBack'))

  const { data, isLoading, error } = useQuery({
    queryKey: ['testData'],
    queryFn: async () => {
      const res = await getRandomUser()

      if (!res.ok) {
        throw new Error('Ошибка запроса')
      }

      return res.json()
    },
    retry: false,
  })

  return {
    status,
    isLoading,
    error,
    setStatus,
    data
  }
}

export default useTestPage;