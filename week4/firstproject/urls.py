from django.contrib import admin
from django.urls import path
from base import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.LoginPage, name='login'),
    path('signup/', views.SignupPage, name='signup'),
    path('home/', views.HomePage, name='home'),
    path('home/create/', views.tweet_create, name='tweet_create'),  # Added trailing slash
    path('home/<int:tweet_id>/delete/', views.tweet_delete, name='tweet_delete'),
    path('home/<int:tweet_id>/edit/', views.tweet_edit, name='tweet_edit'),
    path('logout/', views.Logoutpage, name='logout'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
