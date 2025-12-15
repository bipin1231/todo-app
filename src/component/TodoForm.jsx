import React from 'react'
import { useForm } from 'react-hook-form'

export default function TodoForm({
    defaultValue = {},
    submitLabel,
    onSubmit,
    disabled
}) {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: { status: "pending" },
    });

    const imageFile = watch("image");




    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-900 rounded-3xl p-10">
            <div className="space-y-6">
                <div>
                    <label className="block text-zinc-400 text-sm mb-3">Title</label>
                    <input
                        defaultValue={defaultValue?.title}
                        {...register("title", { required: true })}
                        placeholder="Enter task title"
                        className="w-full px-5 py-4 text-white placeholder-zinc-600 bg-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
                    />
                </div>

                <div>
                    <label className="block text-zinc-400 text-sm mb-3">Description</label>
                    <textarea
                        defaultValue={defaultValue?.description}
                        {...register("description")}
                        placeholder="Enter task description"
                        rows="4"
                        className="w-full px-5 py-4 text-white placeholder-zinc-600 bg-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-zinc-700 transition-all resize-none"
                    />
                </div>

                <div>
                    <label className="block text-zinc-400 text-sm mb-3">Status</label>
                    <select
                        defaultValue={defaultValue?.status}
                        {...register("status")}
                        className="w-full px-5 py-4 text-white bg-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-zinc-700 cursor-pointer transition-all"
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <div>
                    <label className="block text-zinc-400 text-sm mb-3">Image</label>
                    <label className="block w-full px-5 py-4 text-zinc-500 bg-zinc-800 rounded-2xl cursor-pointer hover:bg-zinc-750 transition-all text-center">
                        {imageFile?.[0] ? imageFile[0].name : 'Choose an image'}
                        <input
                            type="file"
                            accept="image/*"
                            {...register("image")}
                            className="hidden"
                        />
                    </label>
                    {
                        !imageFile?.[0] &&
                        defaultValue?.image && (
                            <div className="mt-4">
                                <img
                                    src={defaultValue.image}
                                    alt="Preview"
                                    className="w-full h-64 object-cover rounded-2xl"
                                />
                            </div>
                        )
                    }

                    {imageFile?.[0] && (
                        <div className="mt-4">
                            <img
                                src={URL.createObjectURL(imageFile[0])}
                                alt="Preview"
                                className="w-full h-64 object-cover rounded-2xl"
                            />
                        </div>
                    )}
                </div>
            </div>

            <button
                type="submit"
                disabled={disabled}
                className="disabled:opacity-50 disabled:cursor-not-allowed  cursor-pointer w-full mt-8 py-4 bg-white text-black text-base font-medium hover:bg-zinc-100 transition-all rounded-2xl"
            >
                {submitLabel}
            </button>
        </form>
    )
}
