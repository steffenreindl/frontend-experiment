import { Elysia } from "elysia";

const makeBackend = (prefix: String) => {
        return new Elysia({prefix})
                .get('/', () => 'hi')
}
export { makeBackend } 
