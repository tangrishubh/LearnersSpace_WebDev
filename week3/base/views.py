from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required

def HomePage(request):
    pass

def SignupPage(request):
    if request.method=='POST':
        uname=request.POST.get('firstName')
        uname2=request.POST.get('lastName')
        email=request.POST.get('email')
        pass1=request.POST.get('password')
        my_user = User.objects.create_user(uname,email,pass1)
        print(my_user)
        print(uname,uname2,email,pass1)
        return redirect('login')
    return render (request, 'signup.html')

def LoginPage(request):
    if request.method=='POST':
        uname = request.POST.get('username')
        pass1 = request.POST.get('password')
        user=authenticate(request,username=uname,password=pass1)
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            return HttpResponse ("Username or Password is incorrect!!!")
    return render (request, 'login.html')

def HomePage(request):
    return render (request, 'home.html')
    
def Logoutpage(request):
    logout(request)
    return redirect('login')
