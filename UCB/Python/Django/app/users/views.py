from django.shortcuts import get_object_or_404, render

from django.http import Http404, HttpResponse
from django.urls import reverse

from django.views.generic import DetailView, ListView 

from .models import User


class UserListView(ListView):
    model = Usertemplate_name = 'users/index.html'

    def get_context_data(self, **kwargs):
        context = super(UserListView, self).get_context_data
        (**kwargs)

        context['name'] = 'Adonis'

        return context


# passing in the user number
def detail(request, user_id):
    try:
        context =  { 'user' : User.objects.get(id=user_id) }
    except User.DoesNotExist:
        raise Http404('User does not exist')

    return render(request, 'users/detail.html', context)

def add(request):

    context = { 'header' : 'This is the add view!'}

    return render(request, 'users/add.html', context)

# THIS IS YOUR CONTROLLER