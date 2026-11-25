from rest_framework.response import Response
from rest_framework.views import APIView


class HealthView(APIView):
    """Liveness/readiness probe for the API."""

    def get(self, request):
        return Response({"status": "ok", "service": "kintsugi-api"})
