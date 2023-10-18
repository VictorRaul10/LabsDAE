# Importa los modelos que deseas registrar en el panel de administración
from django.contrib import admin
from .models import Evento, Ubicacion, CategoriaEvento, Comentario, ImagenEvento, EtiquetaEvento

# Registra los modelos en el panel de administración
admin.site.register(Evento)
admin.site.register(Ubicacion)
admin.site.register(CategoriaEvento)
admin.site.register(Comentario)
admin.site.register(ImagenEvento)
admin.site.register(EtiquetaEvento)
