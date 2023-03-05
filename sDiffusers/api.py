from auth_token import auth_token
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import torch
from torch import autocast
from diffusers import StableDiffusionPipeline
from io import BytesIO
import base64

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials = True,
    allow_origins = ["*"],
    allow_methods = ["*"],
    allow_headers = ["*"]
)
devices = "cuda"
modelId = "CompVis/stable-diffusion-v1-4"
pipe = StableDiffusionPipeline.from_pretrained(modelId, revision="fp16", torch_dtype = torch.float16, use_auth_token = auth_token)
pipe.to(devices)


@app.get("/")
def generator(prompt: str):
    with autocast(devices):
        img = pipe(prompt, guidance_scale=8.5).images[0]

    img.save("resultimage.png")
    buffer = BytesIO()
    img.save(buffer, format = "PNG")
    imagestr = base64.b64encode(buffer.getvalue())

    return Response(content = imagestr, media_type = "image/png")