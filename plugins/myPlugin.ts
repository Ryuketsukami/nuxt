// this will run at the beginning, even before composables
export default defineNuxtPlugin((nuxtApp) => {

    return {
        provide: {
            sayGoodbye: (msg: string) => console.log('Hello', msg)
        }
    }

})
