from django.test import SimpleTestCase,TestCase
from django.urls import reverse ,resolve
# Create your tests here.
from app1.views import home,index,requestfront,alldata
from urllib.parse import urlencode
from django.test import Client
from app1.models import Person
import json
class TestUrls(TestCase):
    def test_url_exists_at_correct_location(self):
        response = self.client.get("/")
        # print(response)
        self.assertEqual(response.status_code, 200)
    def test_home_url_resolved(self):
        url=reverse('home')
        self.assertEqual(resolve(url).func,home)
    def test_post_url_resolved(self):
        old_count=Person.objects.count()

        data={"first_name": "john", "last_name":"fnjd","password": "smith","address":"address","email":"mdfj@","number":996653}

        response = self.client.post(reverse('post', kwargs=data))
        new_count =Person.objects.count()
        
        self.assertEqual(Person.objects.count(), old_count+1)

       
    def test_all_data_resolved(self):
        url=reverse('getuser')
        self.assertEqual(resolve(url).func,alldata)
