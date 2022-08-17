import service from "@/util/request"

export function toLogin(data) {
  return service({
    url: '/login/loginAction',
    method: 'POST',
    data
  })
}