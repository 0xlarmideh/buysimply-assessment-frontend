<script setup>
import AuthImage from "/auth-image.png"
import Logo from "/logo.png"
import EyeIcon from "/eye.svg"
</script>

<template>
  <div class="flex w-full flex-auto min-w-0 lg:grid-cols-2">
    <div class="h-screen bg-[#F8EAFF] hidden md:flex flex-col justify-between gap-12 p-6 px-12 min-w-[50%] right-0">
      <img :src="Logo" class="h-[4rem] w-fit" />
      <img class="grow w-full object-cover rounded-[24px]" :src="AuthImage" />
      <div class="font-bold text-center flex flex-col gap-2">
        <p class="text-[20px] text-primary">Team Achieve</p>
        <p class="text-secondary text-[18px]">Your perfect solution for funding your desires</p>
      </div>
    </div>
    <div className="min-h-screen p-4 w-full">
      <div class="max-w-[500px] mt-12 mx-auto">
        <div class="mb-4">
          <p class="text-center text-primary font-bold text-[32px]">Welcome Back</p>
          <p class="text-center text-secondary">Enter your email address and password to access your account.</p>
        </div>
        <form>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-1">
              <label class="required" for="email">Email Address</label>
              <input class="p-2 text-[14px] border border-[#DDDDDD] rounded-md " type="email" id="email" required
                name="email" placeholder="Enter your email">
            </div>
            <div class="flex flex-col gap-1">
              <label class="required" for="email">Password</label>
              <div class="flex border overflow-hidden border-[#DDDDDD] items-center rounded-md "><input
                  class="p-2 text-[14px] grow" type="password" id="password" required name="password"
                  placeholder="Enter your password">
                <div class="border-l bg-[#F7F7F7] p-2 py-3"><img :src="EyeIcon" class="w-[14px]" /></div>
              </div>
              <div class=" flex justify-between">
                <div class="flex  gap-2">
                  <input type="checkbox" id="rememberMe" name="rememberMe">
                  <label class="text-[14px] text-secondary" for="email">Remember me</label>

                </div>
                <button class="text-[14px] text-primary">Forgot Password?</button>
              </div>
            </div>
            <button class="w-full font-bold bg-primary rounded-[8px] py-2 text-white">
              Sign in
            </button>
          </div>


          <p class="text-secondary text-center mt-2">Don&apos;t have an account? <span
              class="text-primary hover:cursor-pointer hover:transition-all duration-600 hover:opacity-90 font-[600]">Sign
              up</span>
          </p>
        </form>
      </div>
    </div>

  </div>
</template>

<style>
.required:after {
  content: " *";
  color: red;
}
</style>
