from rest_framework import serializers
from articles.models import Article


class ArticlePreviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            'id',
            'title',
            'created_at',
            'announce',
            'url',
        ]


class ArticleDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            'title',
            'created_at',
            'text',
        ]
