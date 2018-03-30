from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    #do a bunch of work here
    # response= "<h1>Hello World</h1>"

    #return the response
    return render(request, 'users/home.html', {'name': 'Sushi'})

# def index(request):
#     #do a bunch of work here
#     # response= "<h1>Hello index</h1>"

#     #return the response
#     return HttpResponse(response)

def detail(request):
    #do a bunch of work here
    response= "<h1>Hello detail</h1>"

    #return the response
    return HttpResponse(response)

def add(request):
    #do a bunch of work here
    response= "<h1>Hello add</h1>"

    #return the response
    return HttpResponse(response)