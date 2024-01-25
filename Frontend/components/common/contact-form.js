const ContactForm = () => {
    return (
        <div className="w-full h-full lg:shadow-md rounded-lg p-3 lg:p-10 text-sm">
            <form className="w-full space-y-5">
                <div className="space-y-1.5">
                    <label className="text-gray-800">Name:</label>
                    <input type="text" className="w-full border-[1px] border-gray-300 rounded-sm outline-none py-2 px-4" placeholder="input Text" />
                </div>
                <div className="space-y-1.5">
                    <label className="text-gray-800">Mobile Number:</label>
                    <input type="text" className="w-full border-[1px] border-gray-300 rounded-sm outline-none py-2 px-4" placeholder="input Text" />
                </div>
                <div className="space-y-1.5">
                    <label className="text-gray-800">Location:</label>
                    <input type="text" className="w-full border-[1px] border-gray-300 rounded-sm outline-none py-2 px-4" placeholder="input Text" />
                </div>
                <div className="space-y-1.5">
                    <label className="text-gray-800">Comment:</label>
                    <textarea rows={4} type="text" className="w-full border-[1px] resize-none border-gray-300 rounded-sm outline-none py-2 px-4" placeholder="Write a Comment...." />
                </div>
                <button type="submit" className="w-full bg-main-color text-white py-2 rounded">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;