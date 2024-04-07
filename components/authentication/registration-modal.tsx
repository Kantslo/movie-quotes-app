export default function RegistrationModal() {
    return (
        <main className="flex flex-col gap-[2.05rem] bg-[#222030] py-[3.3rem] px-[2.12rem] min-h-screen">
            <div className="flex flex-col items-center gap-[0.75rem]">
                <h1 className="text-white text-[1.5rem] font-medium leading-[1.5rem]">
                    Create an account
                </h1>
                <p className="text-[#6C757D] text-[1rem] font-normal leading-[1.5rem]">
                    Start your journey!
                </p>
            </div>
            <form className="flex flex-col">
                <label
                    htmlFor="name"
                    className="text-white text-[1rem] font-normal leading-[1.5rem]">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter your name"
                    className="bg-[#CED4DA] text-[#6C757D] text-[1rem] leading-[1.5rem] font-normal rounded-[0.25rem] px-[0.81rem] py-[0.44rem]"
                />
                <label
                    htmlFor="email"
                    className="text-white text-[1rem] font-normal leading-[1.5rem]">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your email"
                    className="bg-[#CED4DA] text-[#6C757D] text-[1rem] leading-[1.5rem] font-normal rounded-[0.25rem] px-[0.81rem] py-[0.44rem]"
                />
                <label
                    htmlFor="password"
                    className="text-white text-[1rem] font-normal leading-[1.5rem]">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="Password"
                    className="bg-[#CED4DA] text-[#6C757D] text-[1rem] leading-[1.5rem] font-normal rounded-[0.25rem] px-[0.81rem] py-[0.44rem]"
                />
                <label
                    htmlFor="confirmPassword"
                    className="text-white text-[1rem] font-normal leading-[1.5rem]">
                    Confirm password
                </label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                    placeholder="Password"
                    className="bg-[#CED4DA] text-[#6C757D] text-[1rem] leading-[1.5rem] font-normal rounded-[0.25rem] px-[0.81rem] py-[0.44rem]"
                />
                <button
                    type="submit"
                    className="flex items-center- justify-center bg-[#E31221] text-white rounded-[0.25rem] py-[0.4375rem] px-[0.8125rem] mt-[1.5rem]">
                    Get started
                </button>
            </form>
        </main>
    );
}
