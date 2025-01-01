import singleUseInstance from "./single-use-axios"

const create = async (url) => {
    const response = await singleUseInstance.post('/create', { url })
    return response.data
}

export {
    create
}