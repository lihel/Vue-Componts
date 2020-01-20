const Controller = require('egg').Controller;

class ApiController extends Controller {
  async login() {
    const { ctx } = this;
    const method = ctx.method;
    const data = method === 'POST' ? this.ctx.request.body : this.ctx.request.query
    debugger
    ctx.body = {
      code: 1,
      data: {
        userName: data.us,
      },
      success: true,
      msg: 'ok',
    };
    ctx.status = 200;
  }
}

module.exports = ApiController;
