import { Component, useState } from "react";

function UploadImage() {

    const [photo, setPhoto] = useState("");
    const onFileChangeHandler = (e) => {
        const formData = new FormData();
        formData.append('file', photo)
        formData.append('id', 26)

        fetch('http://localhost:8080/sharesteer/upload', {
            method: 'post',
            body: formData
        }).then(res => {
            if (res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group files color">
                        <label>Upload Your File </label>
                        <input type="file" className="form-control" name="file" onChange={(e)=>{setPhoto(e.target.files[0])}} />
                        <button onClick={onFileChangeHandler}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UploadImage;