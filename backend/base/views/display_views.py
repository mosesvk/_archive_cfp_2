from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import Display
from base.serializers import DisplaySerializer

from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createDisplay(request):
    user = request.user

    display = Display.objects.create(
        user=user,
        name='Sample Name',
        description=''
    )

    serializer = DisplaySerializer(display, many=False)
    return Response(serializer.data)
