from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

def index(request):
    return HttpResponse("Hello World")

def home(request):
    return HttpResponse("Welcome to Home Page")    
import json

from app1.models import Person
@csrf_exempt
def requestfront(request):
    # print(request)
    if request.method=='POST':
        # data=json.loads(request.body.decode("utf-8"))
        data=json.loads(request.body)
        print(data)
        # email = data.get('email')
        # password = data.get('password')  
        my_values=Person(first_name=data.get('first_name'),last_name=data.get('last_name'),email=data.get('email'),password=data.get('password'),address=data.get('address'),number=data.get('number'))  


        my_values.save();

        return HttpResponse("Hello World from  post",status=200) 

from django.core import serializers
def alldata(request):
    all_data = Person.objects.all()   
    serialized_data = serializers.serialize('json', all_data) 
    print(serialized_data)
    # data=json.dumps(all_data)
    # print(data)
    return HttpResponse(serialized_data,status=200)