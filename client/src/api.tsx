export const getData = async (link: string) => {
    try {
        //http://localhost:5000/getRecipes
        const data = await fetch(link);
        let json = await data.json();
        return json;
    } catch (e) {
        console.log("error", e);
        return e;
    }
};

export const deleteData = async (link: string) => {
    try {
        //http://localhost:5000/recipes/${id}
        const data = await fetch(link, {
            method: "DELETE",
        });
        console.log("deleted", data);
    } catch (e) {
        console.log("error", e);
    }
};

export const updateData = async (link: string, formData: FormData) => {
    try {
        //`http://localhost:5000/recipes/${id}`
        const data = await fetch(link, {
            method: "PATCH",
            body: formData,
        });
    } catch (e) {
        console.log("error", e);
    }
};

export const saveData = async (link: string, formData: FormData) => {
    try {
        //http://localhost:5000/getrecipe
        await fetch(link, {
            method: "POST",
            body: formData,
        });
    } catch (e) {
        console.log("error", e);
    }
};
