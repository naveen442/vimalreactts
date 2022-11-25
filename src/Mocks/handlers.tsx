import { rest } from 'msw';
export const handlers = [
    rest.post<{ username: string, password: string }>('/login', async (req, res, ctx) => {
        console.log(req);
        const body = await req.json();
        console.log(body);
        if (body.username === "naveen" && body.password === "naveen@123") {
            return res(
                ctx.status(200),
                ctx.json({
                    status: "sucessfully"
                })

            )
        }
        else {
            return res(
                ctx.status(404),
                ctx.json({
                    status: "failed"
                })
            )
        }

    })

]