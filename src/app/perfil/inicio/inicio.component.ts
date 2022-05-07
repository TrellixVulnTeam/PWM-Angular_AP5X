import { AuthService } from 'src/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/interfaces/fileUpload';
import { FirestoreService } from 'src/services/firestore.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../perfil.css']
})
export class InicioComponent implements OnInit {

  userName:any = "";
  showChange = false;

  constructor(private auth:AuthService,
    private storage: AngularFireStorage) { 
    this.userName = this.auth.getUsername();
    try{
      this.getUserImg(this.userName);
    }catch(err){
      console.error("No se encontró foto para este perfil");
    }
  }

  ngOnInit(): void {
    
  }


  userImg:Observable<string> | undefined;
  async onUpload(e:any){
    const filePath = 'Profile_images/' + this.userName;
    const task = this.storage.upload(filePath, e.target.files[0]);
    this.getUserImg(this.userName);
    this.showChange = true;
  }

  async getUserImg(userName: string){    
    try{
      this.storage.ref("Profile_images/" + userName)
      .getDownloadURL().subscribe((data) => this.userImg = data);
    }catch(err){
      this.storage.ref("Profile_images/Usuario.png")
      .getDownloadURL().subscribe((data) => this.userImg = data);
    }
  }
  
}
