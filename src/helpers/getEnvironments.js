export const getEnvironments = () => {

    import.meta.getEnvironments
    

    return {
        ...import.meta.env
    }
}