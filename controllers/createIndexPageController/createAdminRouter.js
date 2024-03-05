export const createAdminMiddelware =async  (req, res) => {
    res.send("blog one")
}

export const blogTwoMiddelware = async (req, res) => {
    res.send("blog two");
}

export const blogSetupMiddelware = async (req, res) => {
    res.send("blog setup")
}