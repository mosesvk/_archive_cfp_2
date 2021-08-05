from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import Display
from base.serializers import DisplaySerializer

from rest_framework import status

@api_view(['GET'])
def getDisplays(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''

    products = Display.objects.filter(
        name__icontains=query).order_by('-createdAt')

    page = request.query_params.get('page')
    paginator = Paginator(products, 5)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)
    print('Page:', page)
    serializer = DisplaySerializer(products, many=True)
    return Response({'displays': serializer.data, 'page': page, 'pages': paginator.num_pages})


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
