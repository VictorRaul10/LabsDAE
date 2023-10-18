from django.db import models
from django.contrib.auth.models import User

class Evento(models.Model):
    nombre = models.CharField(max_length=100)
    fecha = models.DateField()
    descripcion = models.TextField()
    organizador = models.ForeignKey(User, on_delete=models.CASCADE)
    ubicacion = models.ForeignKey('Ubicacion', on_delete=models.CASCADE)
    categorias = models.ManyToManyField('CategoriaEvento')

    def __str__(self):
        return self.nombre

class Ubicacion(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    ciudad = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class CategoriaEvento(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class Comentario(models.Model):
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    contenido = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comentario de {self.usuario.username} en {self.evento.nombre}"

class ImagenEvento(models.Model):
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to='event_images/')

    def __str__(self):
        return f"Imagen de {self.evento.nombre}"

class EtiquetaEvento(models.Model):
    eventos = models.ManyToManyField(Evento)
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre
