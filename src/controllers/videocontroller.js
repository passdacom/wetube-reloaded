export const trending = (req, res) => res.render("home", {pageTitle: "Home"});
export const see= (req, res) => res.render("watch", {pageTitle:  "Watch"});
export const edit = (req, res) =>  res.render("edit", {pageTitle: "Edit"});

export const search = (req, res) => res.send("Search the Video");
export const upload = (req, res) => res.send("Upload the Video");


export function deleteVideo(req, res) {
    
    return res.send("Delete the Video");
}
