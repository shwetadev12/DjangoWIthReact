from django.urls import path
from .views import StudentList, StudentCreate, StudentDestroy

urlpatterns = [
    path("list", StudentList.as_view()),
    path("create", StudentCreate.as_view()),
    path("destroy/<int:id>", StudentDestroy.as_view()),
]