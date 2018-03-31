from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^index/$', views.SnippetListView.as_view(), name='index')
    # url(r'^index/$', views.index, name='index'),
    url(r'^detail/(?P<user_id>[0-9]+)/$', views.UserDetailView.as_view(), name='detail'),
    url(r'^add/$', views.add, name='add'),
]

# (?P<name>pattern) the "P" here is just python convention