package com.saludata.SaluData.controller;

import java.util.List;

import com.saludata.SaluData.service.api.AWSS3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/v1/s3")
public class UploadFileController {
	
	@Autowired
	private AWSS3Service awss3Service;
	
	@PostMapping(value = "/upload")
	public ResponseEntity<String> uploadFile(@RequestPart(value="file") MultipartFile file) {
		String fileUrl = awss3Service.uploadFile(file);
		String response = "El archivo " + file.getOriginalFilename() + " fue cargado correctamente a S3. URL: " + fileUrl;
		return new ResponseEntity<String>(response, HttpStatus.OK);
	}
	
	@GetMapping(value = "/list")
	public ResponseEntity<List<String>> listFiles() {
		return new ResponseEntity<List<String>>(awss3Service.getObjectsFromS3(), HttpStatus.OK);
	}
	
	@GetMapping(value = "/download")
	public ResponseEntity<Resource> download(@RequestParam("key") String key) {
		InputStreamResource resource  = new InputStreamResource(awss3Service.downloadFile(key));
		return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+key+"\"").body(resource);
	}
}
