import React from 'react';

const students = [
  {
    no: 1,
    nim: '123456789',
    nama: 'Andi',
    gender: 'Laki-laki',
    prodi: 'Informatika',
    kelas: 'A',
    semester: 4,
    alamat: 'Jl. Raya No. 10',
    hobby: 'Bermain game',
    citaCita: 'Software Engineer',
  },
  {
    no: 2,
    nim: '987654321',
    nama: 'Siti',
    gender: 'Perempuan',
    prodi: 'Sistem Informasi',
    kelas: 'B',
    semester: 5,
    alamat: 'Jl. Merdeka No. 20',
    hobby: 'Membaca',
    citaCita: 'Business Analyst',
  },
  // Tambahkan data lainnya di sini...
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-900">Data Mahasiswa</h1>
      <div className="overflow-x-auto">
        {/* Tampilan Mobile */}
        <div className="block sm:hidden">
          {students.map((student) => (
            <div key={student.no} className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
              <p className="text-gray-800"><strong>No:</strong> {student.no}</p>
              <p className="text-gray-800"><strong>NIM:</strong> {student.nim}</p>
              <p className="text-gray-800"><strong>Nama:</strong> {student.nama}</p>
              <p className="text-gray-800"><strong>Gender:</strong> {student.gender}</p>
              <p className="text-gray-800"><strong>Prodi:</strong> {student.prodi}</p>
              <p className="text-gray-800"><strong>Kelas:</strong> {student.kelas}</p>
              <p className="text-gray-800"><strong>Semester:</strong> {student.semester}</p>
              <p className="text-gray-800"><strong>Alamat:</strong> {student.alamat}</p>
              <p className="text-gray-800"><strong>Hobby:</strong> {student.hobby}</p>
              <p className="text-gray-800"><strong>Cita-cita:</strong> {student.citaCita}</p>
            </div>
          ))}
        </div>

        {/* Tampilan Desktop/Tablet */}
        <div className="hidden sm:block">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-200">
              <tr className="text-gray-800">
                <th className="px-4 py-2 border border-gray-300">No</th>
                <th className="px-4 py-2 border border-gray-300">NIM</th>
                <th className="px-4 py-2 border border-gray-300">Nama</th>
                <th className="px-4 py-2 border border-gray-300">Gender</th>
                <th className="px-4 py-2 border border-gray-300">Prodi</th>
                <th className="px-4 py-2 border border-gray-300">Kelas</th>
                <th className="px-4 py-2 border border-gray-300">Semester</th>
                <th className="px-4 py-2 border border-gray-300">Alamat</th>
                <th className="px-4 py-2 border border-gray-300">Hobby</th>
                <th className="px-4 py-2 border border-gray-300">Cita-cita</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.no} className="border-b">
                  <td className="px-4 py-2 text-center border border-gray-300">{student.no}</td>
                  <td className="px-4 py-2 text-center border border-gray-300">{student.nim}</td>
                  <td className="px-4 py-2 border border-gray-300">{student.nama}</td>
                  <td className="px-4 py-2 text-center border border-gray-300">{student.gender}</td>
                  <td className="px-4 py-2 border border-gray-300">{student.prodi}</td>
                  <td className="px-4 py-2 text-center border border-gray-300">{student.kelas}</td>
                  <td className="px-4 py-2 text-center border border-gray-300">{student.semester}</td>
                  <td className="px-4 py-2 border border-gray-300">{student.alamat}</td>
                  <td className="px-4 py-2 border border-gray-300">{student.hobby}</td>
                  <td className="px-4 py-2 border border-gray-300">{student.citaCita}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
