import { Son, Api, Clock, Employee } from './base'

// const son = new Son('Mike', 28)
// son.say('Hello')
// Api.test()

const clock = new Clock(16, 3)
clock.setTime('2019-05-25')
const t = clock.getTime()
console.log(t)