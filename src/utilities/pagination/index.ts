export const parse = (page: number, size: number) => {
    const limit = size ? +size : 3
    const offset = page ? page * limit : 0
    return { limit, offset }
}

export const data = (data: {count: number, rows: any[]}, page: number, limit: number) => {
    const { count: total_items, rows: items } = data
    const current_page = page ? +page : 0
    const total_pages = Math.ceil(total_items / limit)
    return { total_items, items, total_pages, current_page }
}