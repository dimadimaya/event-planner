const cloudName = "dyytcbvac";
const uploadPreset = "ezasof0q";

export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data.secure_url;
    } else {
      throw new Error("Image upload failed");
    }
  } catch (error) {
    throw new Error("Image upload failed");
  }
};
